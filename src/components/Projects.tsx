import React, { useEffect } from 'react';
import ThemedImage from '@theme/ThemedImage';


const projects = [
    {
        title: 'App Store Rank',
        source_code: '',
        link: 'https://apprank.streamlit.app',
        image_light: '/projects/apprank.png',
        desc: 'Historical App Store ranking viewer.',
        language: 'Python',
        article: '',
    },
    {
        title: 'UltraSearch',
        source_code: '',
        link: 'https://ultrasearch.cc',
        image_light: '/projects/ultrasearch.gif',
        image_dark: '/projects/ultrasearch2.gif',
        desc: 'Library Genesis wrapper for aesthetics and speed.',
        language: 'Python',
        article: '',
    },
    {
        title: 'My Personal Website',
        source_code: 'https://github.com/lukafilipxvic/lukafilipxvic.github.io',
        link: 'https://lukafilipovic.com',
        image_light: '/projects/personal-website.png',
        language: 'React JS',
        article: '',
    },
    {
        title: 'Snapchat Filters',
        source_code: '',
        link: 'https://www.snapchat.com/add/lukafilipxvic',
        image_light: '/projects/snap_lenses.png',
        desc: 'Snapchat filters',
        language: 'Javascript',
        article: '',
    },
];

export default function Projects() {
    return (
        <div className="mx-auto mt-8">
            {projects.map((project) => (
                <div className='flex my-4 mx-2 border-[1px] p-2 rounded]'>
                    <div className='flex justify-start items-center p-4'>
                        <ThemedImage
                            sources={{
                                light: project.image_light,
                                dark: project.image_dark || project.image_light, // Fallback to project.image_light if image_dark is not specified
                            }}
                            alt={project.title}
                            className="w-[10em] object-cover"
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start ml-0 text-left p-2'>
                        <div>
                            <div className="title md:text-lg font-bold">
                                {project.title}
                            </div>
                            <div className="subtitle text-sm flex mt-2 leading-tight max-w-[400px]">
                                {project.desc}
                            </div>
                        </div>
                        <div className="flex mt-4 mb-2 items-start justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={project.link}
                                className="mr-4 !no-underline"
                            >
                                <button
                                    className="flex rounded-xl p-2 whitespace-nowrap text-sm font-semibold bg-[#b93430] hover:bg-grey-300 hover:dark:bg-grey-200 hover:text-[#ffffff] hover:no-underline"
                                    type="button"
                                >
                                    View Project
                                </button>
                            </a>
                            {project.source_code && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={project.source_code} 
                                >
                                    <button
                                        className="flex rounded-xl p-2 whitespace-nowrap text-sm"
                                        type="button"
                                    >
                                        Source Code
                                    </button>
                                </a>
                            )}
                            {project.article && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={project.article}
                                >
                                    <button
                                        className="flex rounded-xl p-2 whitespace-nowrap text-sm"
                                        type="button"
                                    >
                                        Read more
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};