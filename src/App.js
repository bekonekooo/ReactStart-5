import Button from "./components/Button";
import {GoBell} from "react-icons/go"

import Accordion from "./components/Accordion"

function App (){
    const items =[

        {
            id:"1",
            label:"can i use react on a project",
            content:"you can use any project on react"
        },
        
        {
            id:"2",
            label:"can i use javascript on a project",
            content:"you can use any project on react"
        },
        
        {
            id:"3",
            label:"can i use Css on a project",
            content:"you can use any project on react"
        }
    ]


return<Accordion items={items}></Accordion>
}
export default App;