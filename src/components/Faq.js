import { useState } from "react"

const FaqItem = ({ title, description, isVisible ,setIsVisible } ) => { 
    let i = 0
    return (
        <div className="faqitem mb-5  border-b-black-700" key={"faqitem " + i++}>
            <h4 className="text-lg font-semibold">{title}</h4>
            {isVisible ? <p>{description}</p> : ""}
            {isVisible ?   <button className="underline text-red-500 mr-2" onClick={() => {
                    setIsVisible()
            }}>Hide</button> :  <button className="underline text-red-500 mr-2" onClick={() => {
               setIsVisible()
            }}>Show</button>}
        </div>
    )   
}

function Faq() {
    const [visibleFaq, setVisibleFaq] = useState("first")
    console.log("ji"+visibleFaq);
    
    return (
        <div className="innerMain">
            <h1 className="text-4xl mb-4 font-bold ">Faqs</h1>
            <div className="accodians-custom">
                <FaqItem 
                    isVisible={visibleFaq === "first"}
                    setIsVisible={()=>{(visibleFaq==="first" )? setVisibleFaq(null) :setVisibleFaq("first")}}
                    title="What to ask after this question?" 
                    description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                />
                <FaqItem 
                    isVisible={visibleFaq === "second"}
                    setIsVisible={()=>{(visibleFaq==="second" )? setVisibleFaq(null) :setVisibleFaq("second")}}
                    title="What more services do you offer , Just curious to know." 
                    description="Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                />
                <FaqItem 
                    isVisible={visibleFaq === "third"}
                    setIsVisible={()=>{(visibleFaq==="third" )? setVisibleFaq(null) :setVisibleFaq("third")}}
                    title="First Basic Question" 
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
        </div>
    )
}
export default Faq