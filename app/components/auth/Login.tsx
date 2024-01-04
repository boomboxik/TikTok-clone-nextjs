import { ShowErrorObject } from "@/app/types";
import { useState } from "react";
import TextInput from "../TextInput";

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string | ''>('');
    const [password, setPassword] = useState<string | ''>('');
    const [error, setError] = useState<ShowErrorObject | null>(null)

    const showError = (type: string) => {
        if (error && Object.entries(error).length > 0 && error?.type == type) {
            return error.message
        }
        return ''
    }

    return (
        <>
            <div>
                <h1 className="text-center text-[28px] mb-4 font-bold">Log in</h1>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={email}
                        placeholder="Email address"
                        onUpdate={setEmail}
                        inputType="email"
                        error={showError('email')}
                    />
                </div>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={password}
                        placeholder="Password"
                        onUpdate={setPassword}
                        inputType="password"
                        error={showError('password')}
                    />
                </div>
            </div>
        </>
    )
}