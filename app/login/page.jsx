"use client"
import supabase from '../../utils/supabase_login';

const Auth = () => {

    const handleLogin = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });

            if (error) {
                console.error('Error signing in with Google:', error.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Auth;
