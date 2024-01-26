import Content from "./Content";
import Header from "./Header";

function Main(){
    return(
        <>
            <div id="content">
                <Header title="Dashboard" />
                <Content/>
            </div>
        </>
    )
}

export default Main;