import { FormLogin } from "../components/Form.jsx"

export default function Login() {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-gray-200">
            <div className="w-min h-min">
                <FormLogin title="Log in to your account" />  
            </div>
        </div>
    )
}