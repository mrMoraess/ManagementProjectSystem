import { Link } from "react-router-dom";

function FormRegist({ title }) {
    return (
        <>
            <form className="p-4 rounded-lg flex flex-col gap-2 bg-white" id="myRegistForm"> 
                <h2 className="text-4xl text-center mb-4 mt-2">{title}</h2>
                <Input type="text" name="name" id="nameRegist"/>
                <Input type="email" name="email" id="emailRegist"/>
                <Input type="password" name="password" id="passRegist"/>
                <BtnRegist content="register"></BtnRegist>
                <BtnLogin content="login" path="/login"></BtnLogin>
            </form>
        </>
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

function Input({ type, name, id }) {
    return (
        <div className="flex flex-row justify-between align-middle gap-2">
            <label htmlFor={name} className="capitalize">{name}</label>
            <input type={type} name={name} className="p-2 rounded bg-gray-50 border-2 border-solid border-gray-300 outline-none" id={id}/>
        </div>
    )
}

function BtnLogin({ content, path }) {
    return (
        <Link  to={path} id="btnLog">
            <input type="submit" className="rounded text-center p-2 capitalize text-slate-950 bg-white border-2 border-solid border-gray-300 w-full" value={content} />
        </Link>
    );
}

function BtnRegist({ content, path }) {
    return (
        <Link to={path} id="btnReg">
            <input type="submit" className="rounded text-center p-2 capitalize text-white bg-cyan-500 w-full" value={content}/>
        </Link>
    );
}

export {
    FormLogin,
    FormRegist
}