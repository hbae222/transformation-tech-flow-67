import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      initial={{ y: 0 }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col items-center text-center flex-1 w-full justify-center">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-3 mt-2 text-xl w-full">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 flex-1 w-full px-2">
          {description}
        </div>
      </div>
    </motion.div>
  );
};