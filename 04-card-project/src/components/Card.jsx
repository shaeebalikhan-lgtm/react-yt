
import { Bookmark } from 'lucide-react'
const Card = (Props) => {
    console.log(Props)
    return (
        <div className="card">
            <div className='top'>
                <img src={Props.CompanyLogo} alt="" />
                <button>Save <Bookmark size={18} /></button>
            </div>
            <div className='center'>
                <h3>{Props.companyName} <span>{Props.datePosted} </span></h3>
                <h2>{Props.post}</h2>
            </div>
            <div>
                <h4>{Props.tag1}</h4>
                <h4>{Props.tag1}</h4>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{Props.pay}</h3>
                    <p>{Props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>

    )
}

export default Card