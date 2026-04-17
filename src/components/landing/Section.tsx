import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center p-8 md:p-16 lg:p-24">
      <div className={`flex w-full h-full items-center gap-12 ${image ? 'flex-row' : 'flex-col justify-center'}`}>
        <div className={`flex flex-col justify-center ${image ? 'flex-1' : 'max-w-4xl'}`}>
          {subtitle && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight text-[#0D3A5C]"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mt-6 text-[#3A7FA8]"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-[#1A6FA8] bg-transparent border-[#1A6FA8] hover:bg-[#1A6FA8] hover:text-white transition-colors"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>

        {image && (
          <motion.div
            className="flex-1 flex items-center justify-center h-full py-16"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={image}
              alt=""
              className="w-full max-w-lg h-auto max-h-[70vh] object-cover rounded-2xl shadow-2xl shadow-blue-200"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
