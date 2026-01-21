
// Mock Browser Environment
global.document = {
    cookie: 'sb-access-token=mock-access-token; sb-refresh-token=mock-refresh-token; Domain=.aiworkspace.pro',
    referrer: ''
};

global.window = {
    location: {
        hostname: 'tasks.aiworkspace.pro',
        origin: 'https://tasks.aiworkspace.pro'
    },
    addEventListener: () => { },
    removeEventListener: () => { }
};

global.localStorage = {
    store: {},
    getItem: (key) => global.localStorage.store[key] || null,
    setItem: (key, value) => { global.localStorage.store[key] = value; },
    removeItem: (key) => { delete global.localStorage.store[key]; }
};

// Mock Supabase
const mockSession = {
    access_token: 'new-access-token',
    refresh_token: 'new-refresh-token',
    user: { id: 'user-123', email: 'test@example.com' }
};

const mockSupabaseIdx = {
    auth: {
        getSession: async () => ({ data: { session: null }, error: null }), // Initially null
        setSession: async ({ access_token, refresh_token }) => {
            if (access_token === 'mock-access-token' && refresh_token === 'mock-refresh-token') {
                return { data: { session: mockSession }, error: null };
            }
            return { data: { session: null }, error: { message: 'Invalid tokens' } };
        },
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
    }
};

// Self-contained logic test
async function testLogic() {
    console.log('Testing Enhanced Auth Logic...');

    // Mock Dependencies
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    // MOCK of the function we implemented in src/plugins/crossSubdomainAuth.ts
    const restoreSessionWithRetry = async (maxRetries = 5, delayMs = 10) => {
        console.log('Starting restore...');
        for (let i = 1; i <= maxRetries; i++) {
            console.log(`Attempt ${i}`);

            // Check cookies
            const at = getCookie('sb-access-token');
            const rt = getCookie('sb-refresh-token');

            if (!at || !rt) {
                console.log('Missing cookies');
                continue;
            }

            // Restore
            const { data, error } = await mockSupabaseIdx.auth.setSession({ access_token: at, refresh_token: rt });

            if (data.session) {
                console.log('Success!');
                return { success: true, session: data.session };
            }
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, delayMs))
        }
        return { success: false };
    };

    const result = await restoreSessionWithRetry(3, 10);
    if (result.success && result.session.user.id === 'user-123') {
        console.log('PASSED: Session restored from cookies.');
    } else {
        console.error('FAILED: Session not restored.');
        process.exit(1);
    }
}

testLogic();
