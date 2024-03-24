import React from 'react';

const Designs = [
    {
        title: 'Horizontal Outline Artwork of Croatia',
        year: '2024',
        link: '',
        image: '/design/hrvatska-linije.png',
    },
    {
        title: 'XBT Graphics',
        year: '2022',
        link: '',
        image: '/design/xbt-graphics.png',
    },
    {
        title: 'Nike Mercurial Concept',
        year: '2017',
        link: '',
        image: '/design/mercurial.png',
    },
    {
        title: 'Nike Magista Concept',
        year: '2017',
        link: '',
        image: '/design/magista.png',
    },
    {
        title: 'Nike MagistaX Concept',
        year: '2017',
        link: '',
        image: '/design/magistax.png',
    },
    {
        title: 'Nike Hypervenom Concept',
        year: '2017',
        link: '',
        image: '/design/hypervenom.png',
    },    
];

export default function Design() {
    const designsByYear = Designs.reduce((acc, design) => {
        acc[design.year] = acc[design.year] || [];
        acc[design.year].push(design);
        return acc;
    }, {});

    return (
        <div className="space-y-8">
        {Object.entries(designsByYear)
            .sort((a, b) => b[0] - a[0])
            .map(([year, designs]) => (
                <div key={year} className="space-y-2">
                    <div className="flex gap-2 items-baseline">
                        <h2 className="font-['Erode'] shrink-0">{year}</h2>
                        <div className='border-b w-full'></div>
                    </div>
                    <div>
                        <div className="grid gap-4 grid-flow-col" style={{width: 'fit-content' }}>
                        {designs.map((design, index) => (
                            <div key={index} className="border" title={design.title} style={{border: '1px solid grey'}}>
                                <img
                                    src={design.image}
                                    title={design.title}
                                    style={{maxHeight: '105px', width: 'auto' }}
                                />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}