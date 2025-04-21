import { motion } from "framer-motion";
import Image from "next/image";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ModuleCard({ title, description, icon }: ModuleCardProps) {
  return (
    <motion.div
      className="bg-[#FFCA2D66] text-white rounded-3xl px-8 py-4 w-[300px] h-[150px] flex flex-col items-start justify-center shadow-lg border border-[#E8AC35]"
    >
      {/* Icon & Title Row */}
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
        <h3 className="text-lg font-semibold leading-tight text-[#DFDFDF]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base leading-snug text-white mt-2">
        {description}
      </p>
    </motion.div>
  );
}
