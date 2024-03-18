export defalut function FunctionState() {
    let apple = "사과";

    function inEnglish() {
        apple = "apple";
        console.log("변수값",apple)
    }
    return (
        <div>
            <div>{apple}</div>
        </div>
    )
}
