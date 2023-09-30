import ShowList from "./ShowList";
import styles from "@/styles/components/skills/Outcomes.module.css";
import SourceLink from "./SourceLink";

const list : string[] = [
    "Use computer packages for computer-aided draughting presentation, scheduling and information processing.",
    "Manage and prepare tender and contractual documents relating to building work.",
    "Estimate cost and undertake financial management of construction projects.",
    "Manage the construction of buildings and related infrastructure.",
    "Manage the human resources within a construction firm.",
    "Understand and evaluate economic issues concerning the construction sector and the construction firm at both a micro and macro level.",
    "Understand the time value of money and apply discounted cash flow techniques for evaluating alternative property investments.",
    "Communicate with construction professionals concerning spatial concepts, financial issues and construction assembly problems."
]

export default function Outcomes() {
    return (
        <section id="outcomes" className={styles.outcomes}>
            <h2 className={styles.outcomesTitle}>BSc Construction Studies degree outcomes</h2>
            <section className={styles.outcomesContent}>
                <ShowList 
                    description="The curriculum of the 3-year BSc in Construction Studies programme equips graduates to"
                    list={list}
                />
                <p>The <b>aims</b> of the programme are: to provide employable management graduates to the construction industry; to fully satisfy the criteria for accreditation in terms of the requirements of the Chartered Institute Building (CIOB), the South African Council for the Project and Construction Management Professions (SACPCMP), the Royal Institution of Chartered Surveyors (RICS), and the South African Council for the Quantity Surveying Profession (SACQSP).
</p>
                <SourceLink 
                    link=""
                    text="EBE Undergraduate Handbook, 2023"
                />
            </section>
        </section>
    )
}

