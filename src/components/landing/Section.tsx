import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, items, isActive, showButton, buttonText, image }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center p-8 md:p-16 lg:p-24 overflow-hidden">
      <div className={`flex w-full h-full items-center gap-12 ${image ? 'flex-row' : 'flex-col justify-center'}`}>
        <div className={`flex flex-col justify-center overflow-y-auto max-h-full py-8 ${image ? 'flex-1' : 'max-w-4xl'}`}>
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
            className="text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-base md:text-lg mt-4 text-white/80"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {items && (
            <motion.ol
              className="mt-5 flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A6FA8] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm md:text-base text-white/80">
                      <span className="font-semibold text-white">{item.label}. </span>
                      {item.text}
                    </p>
                    {item.subitems && (
                      <ul className="flex flex-col gap-1 ml-1">
                        {item.subitems.map((sub, j) => (
                          <li key={j} className="flex gap-2 text-sm text-white/60">
                            <span className="flex-shrink-0 text-white/60 font-bold">·</span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </motion.ol>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
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