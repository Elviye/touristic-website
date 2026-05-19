import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { BracketButton } from '../ui/BracketButton'

const heroWords = ['Beyond', 'Marrakech.', 'Discover', 'Hidden', 'Treasures.']

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden">
      <img
        src="/images/hero/marrakech.jpg"
        alt="Marrakech"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-10">
        <motion.p
          className="mb-4 font-inter text-[0.68rem] uppercase tracking-[0.28em] text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          {t('hero.label')}
        </motion.p>
        <h1 className="max-w-5xl font-serif text-[clamp(2.8rem,5.5vw,5.8rem)] italic leading-[1.05] text-white">
          {heroWords.map((word, index) => (
            <motion.span
              key={word}
              className="mr-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-5 max-w-xl font-inter text-[0.95rem] font-light leading-relaxed text-white/72"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.62 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.74 }}
        >
          <BracketButton variant="light" to="/region">
            {t('hero.explore')}
          </BracketButton>
          <BracketButton variant="light" to="/lalla-takerkoust">
            {t('hero.plan')}
          </BracketButton>
        </motion.div>
      </div>
    </section>
  )
}
