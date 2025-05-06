import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type CountCardProps = {
    target: number;
    label: string;
    duration?: number;
};

export function CountCard({ target, label, duration = 2 }: CountCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -50px 0px"
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        if (isInView) {
            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(Math.min(Math.round(target * progress), target));
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(target);
                }
            };

            animationFrame = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, target, duration]);

    return (
        <div ref={ref} className="border p-6 text-center rounded shadow">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl font-bold text-teal-700"
            >
                {count}+
            </motion.div>
            <div className="mt-2 text-sm text-gray-700 font-medium">{label}</div>
        </div>
    );
}
