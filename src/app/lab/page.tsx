import BlurFadeText from '@/components/magicui/blur-fade-text'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const page = () => {
     return (
          <div className="flex flex-col space-y-2">
               <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none"
                    yOffset={8}
                    text='Hey 👋🏻 Welcome to Component Lab ✨'
               />
               <BlurFadeText
                    className="max-w-[600px] text-lg md:text-xl"
                    delay={BLUR_FADE_DELAY * 2}
                    text='This page is under construction.'
               />
               <BlurFadeText
                    className="max-w-[600px] text-sm md:text-base text-muted-foreground"
                    delay={BLUR_FADE_DELAY * 3}
                    text='Here I’ll share my custom components.'
               />
               <BlurFadeText
                    className="max-w-[600px] text-xs md:text-sm text-muted-foreground underline"
                    delay={BLUR_FADE_DELAY * 4}
                    text='Check back soon for updates!'
               />
          </div>
     )
}

export default page