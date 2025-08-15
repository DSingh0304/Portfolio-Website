import Section from "./Section";
import { funFacts } from "../../data/funFacts.js"

const MyFunFacts = () => {

    return <>
    <Section id={'FunFacts'} title={'facts about me'}>
        <div className="container mx-auto px-4">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {funFacts.map((fact, index) => (
                    <li
                        key={`${index}-${fact}`}
                        className=" border border-gray-200  p-4 shadow-sm transition-shadow hover:shadow-md bdr hover:cursor-pointer "
                    >
                        <div className="flex items-start gap-3">
                            <span className="mt-1 text-purple">*</span>
                            <p className="text-sm ">{fact}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </Section>
    </>
}

export default MyFunFacts;