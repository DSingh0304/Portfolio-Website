const SkillsCard = ({ skills }) => {
    if (!skills) return null;
    const { id, title, content } = skills;
    const items = Array.isArray(content) ? content : [String(content)];

    return (
        <div id={id} className="bdr border-2 border-gray-700">
            <h3 className=" bdr p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
                {title}
            </h3>
            <div className="p-4 text-gray-400">
                <ul className="space-y-2 list-disc pl-5">
                    {items.map((item, index) => (
                        <li key={`${id}-${index}`} className="leading-relaxed">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsCard;
