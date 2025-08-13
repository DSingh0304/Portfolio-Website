const SkillsCard = ({ skills }) => {
    if (!skills) return null;
    const { id, title, content } = skills;
return (
    <div id={id} className="bdr border-2 border-gray-700">
        <h3 className="p-4 border-2 border-gray-300 text-xl font-bold text-white mb-4">
            {title}
        </h3>
        <div className="p-4 text-gray-400">
            <p className="leading-relaxed">
                {Array.isArray(content) ? content.join(" ") : String(content)}
            </p>
        </div>
    </div>
);
};

export default SkillsCard;
