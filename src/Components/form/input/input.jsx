const Input = ({svg,type,id,placeholder,callback}) => {
    return (
        <div className="w-full h-[2em] flex flex-row my-2">
            <div className="h-full w-full bg-primary p-2 box-border">
                <img src={svg}></img>
            </div>
            <input
                className="p-2 box-border ] w-[11em] border"
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                onBlur={(e) => callback(e.target.value,id)}
                required
            />
        </div>
    )
}

export default Input