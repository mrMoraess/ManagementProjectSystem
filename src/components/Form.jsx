import { Link } from "react-router-dom";

function FormRegist({ title }) {
    return (
        <form className="p-4 rounded-lg flex flex-col gap-2 bg-white"> 
            <h2 className="text-4xl text-center mb-4 mt-2">{title}</h2>
            <Input type="text" name="name"/>
            <Input type="email" name="email"/>
            <Input type="password" name="password"/>
            <BtnRegist content="register"></BtnRegist>
            <BtnLogin content="login" path="/login"></BtnLogin>
        </form>
    )
}

function FormLogin({ title }) {
    return (
        <form className="p-4 rounded-lg flex flex-col gap-2 bg-white w-min h-min border-2 border-solid border-gray-300"> 
            <h2 className="text-4xl text-center mb-4 mt-2">{title}</h2>
            <Input type="email" name="email"/>
            <Input type="password" name="password"/>
            <BtnRegist content="login"></BtnRegist>
            <BtnLogin content="register" path="/regist"></BtnLogin>
        </form>
    )
}

function Input({ type, name }) {
    return (
        <div className="flex flex-row justify-between align-middle gap-2">
            <label htmlFor={name} className="capitalize">{name}</label>
            <input type={type} name={name} className="p-2 rounded bg-gray-50 border-2 border-solid border-gray-300 outline-none"/>
        </div>
    )
}

function BtnLogin({ content, path }) {
    return (
        <Link className="rounded text-center p-2 capitalize text-slate-950 bg-white border-2 border-solid border-gray-300" to={path}>{content}</Link>
    );
}

function BtnRegist({ content, path }) {
    return (
        <Link className="rounded text-center p-2 capitalize text-white bg-cyan-500" to={path} >{content}</Link>
    );
}

export {
    FormLogin,
    FormRegist
}