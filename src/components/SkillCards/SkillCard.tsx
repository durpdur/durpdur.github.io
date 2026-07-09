type SkillCardProps = {
    skill: string;
}

const skills = new Set([
    "Python", "Java", "C++", "TypeScript", "SQL", "HTML/CSS",
    "PostgreSQL", "MySQL", "Redis", "Google Cloud",
    "React", "Node.js", "Spring Boot", "Docker", "Pandas",
    "Linux", "Git/GitHub", "CI/CD", "Grafana", "Prometheus",
    "llama.cpp", "vLLM", "GGUF", "Apple Neural Engine & Core ML"
]);

function SkillCard({ skill }: SkillCardProps) {


    return (
        <div>
            <div></div>
            <div>{skill}</div>
        </div>
    );
}

export default SkillCard;