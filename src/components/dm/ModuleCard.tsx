import { motion } from "framer-motion";
import Image from "next/image";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string; // Added icon property
}

export function ModuleCard({ title, description, icon }: ModuleCardProps) {
  return (
    <motion.div
    
      className="bg-[#FFCA2D66]  px-4 py-4 rounded-3xl w-[300px] h-[150px] flex flex-col items-start justify-center gap-4 border-2 border-[#E8AC35]">

      {/* Icon & Title Display in Same Line */}
      <div className="flex items-center gap-4">
        <Image src={icon} alt={title} width={50} height={50} />
        <h3 className="text-xl font-semibold text-[#DFDFDF]">{title}</h3>
      </div>
      <p className="text-[#FFFFFF] text-sm">{description}</p>
    </motion.div>
  );
}
