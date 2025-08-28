import React from 'react'
import ServicePage from "@/app/components/servicePage/DigitalMarketing";

export default function DgService() {
    return (
        <ServicePage
            heroImg="/servicesDetals/service-single-img.jpg"
            title="Digital Marketing"
            description="Our digital marketing approach is a data-driven strategy..."
            features={[
                "Content Marketing Explains Your Brand’s Story",
                "Personalized Email Marketing To Nurture Leads",
                "Social Media Marketing That Engages & Converts",
                "Comprehensive SEO Services For Visibility",
                "Performance Analytics & Reporting",
            ]}
            featureImg="/servicesDetals/service-entry-img.jpg"
            sidebarServices={[
                "Branding & Identity",
                "Creative Content Production",
                "Content Strategy & Marketing",
                "E-Commerce Solutions",
                "UX / UI Design",
                "Performance Marketing",
                "Social Media Management",
            ]}
            processSteps={[
                {
                    icon: "/icons/icon-service-process-step-1.svg",
                    image: "/servicesDetals/service-process-step-1.jpg",
                    title: "Discovery Phase",
                    description:
                        "Initial consultation to understand your brand, goals, and target audience.",
                },
                {
                    icon: "/icons/icon-service-process-step-2.svg",
                    image: "/servicesDetals/service-process-step-2.jpg",
                    title: "Implementation",
                    description:
                        "Executing tailored strategies to boost engagement and conversions.",
                },
                {
                    icon: "/icons/icon-service-process-step-3.svg",
                    image: "/servicesDetals/service-process-step-3.jpg",
                    title: "Collaboration",
                    description:
                        "Working closely with clients to refine campaigns and maximize ROI.",
                },
            ]}
            faqs={[
                {
                    question: "What digital marketing services do you offer?",
                    answer:
                        "We provide SEO, social media marketing, PPC campaigns, email marketing, content marketing, and performance analytics.",
                },
                {
                    question: "How long does it take to see results from digital marketing?",
                    answer:
                        "Typically, SEO takes 3–6 months to show strong results, while paid ads and social campaigns can generate traffic and leads almost immediately.",
                },
                {
                    question: "Can you guarantee first-page rankings on Google?",
                    answer:
                        "No ethical agency can guarantee specific rankings, but we follow best practices to significantly improve your visibility and traffic.",
                },
                {
                    question: "Do you provide customized strategies for each business?",
                    answer:
                        "Yes, every strategy is tailored to your business goals, target audience, and budget to maximize ROI.",
                },
                {
                    question: "How do you measure the success of a campaign?",
                    answer:
                        "We track KPIs such as website traffic, lead generation, conversions, engagement, and overall ROI with detailed reporting.",
                },
                {
                    question: "Do you work with small businesses and startups?",
                    answer:
                        "Absolutely. We create flexible digital marketing packages suited for startups, small businesses, and enterprises.",
                },
                {
                    question: "Will I have control over my campaigns?",
                    answer:
                        "Yes, we keep everything transparent. You’ll have access to reports, insights, and approvals before major campaign decisions.",
                },
            ]}

        />
    );
}
