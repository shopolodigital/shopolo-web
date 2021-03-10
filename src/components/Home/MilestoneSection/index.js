import React from 'react'
import "./Milestone.scss"

const Milestone = () => {
    const data = [
        {
            "count": "$86550",
            "class": "RevenueText",
            "text": "Revenue generated"
        },
        {
            "count": "3000+",
            "class": "CatalogsText",
            "text": "Catalogs distributed"
        },
        {
            "count": "700+",
            "class": "ArtistsText",
            "text": "Artists served"
        },
        {
            "count": "30+",
            "class": "LabelsText",
            "text": "Labels served"
        },
        {
            "count": "100M+",
            "class": "StreamsText",
            "text": "Streams"
        }
    ]
    return (
        <div className="MilestoneHolder">
            <p className="Heading">Our Milestone Insight</p>
            <div className="Desktop">
                <div className="Top">
                    {data.slice(0, 2).map((x, idx) => (
                        <div>
                            <div className="Card" key={idx}>
                                <p className={"Count Count__" + x.class}>{x.count}</p><break></break>
                                <p className="Description">{x.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Bottom">
                    {data.slice(2, 5).map((x, idx) => (
                        <div>
                            <div className="Card" key={idx}>
                                <p className={"Count Count__" + x.class}>{x.count}</p><break></break>
                                <p className="Description">{x.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Mobile">
                {data.map((x, idx) => (
                    <div>
                        <div className="Card" key={idx}>
                            <p className={"Count Count__" + x.class}>{x.count}</p><break></break>
                            <p className="Description">{x.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Milestone
