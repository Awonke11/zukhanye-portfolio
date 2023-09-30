import React from "react";
import ShowList from "./ShowList";
import styles from "@/styles/components/skills/Attributes.module.css";

const list : string[] = [
    "Ethical judgment",
    "Professionalism in all that they do",
    "Environmental awareness",
    "An understanding of social norms relevant to their profession",
    "Critical Inquiry in respect of the construction and property industry",
    "Technical knowledge/competency",
    "Industrial knowledge/competency",
    "The impact of professional practice on social responsibility, social justice and social norms"
]

export default function Attributes() {
    return (
        <section id="attributes" className={styles.attributes}>
            <h2 className={styles.attributesTitle}>Graduate attributes</h2>
            <section className={styles.attributesContent}>
                <ShowList 
                    description="The Department of Construction Economics and Management at the University of Cape Town strive to produce CEM graduates who ascribe to the following intrinsic values and competencies"
                    list={list}
                />
            </section>
        </section>
    )
}