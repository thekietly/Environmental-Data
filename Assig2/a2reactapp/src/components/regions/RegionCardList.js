import { useState, useEffect } from 'react';
import RegionCard from "./RegionCard";
import { fetchRegionData } from "../../services/API";

const RegionCardList = ({ }) => {
    const [regionData, setRegionData] = useState([]);
    useEffect(() => {
        const getRegionData = async () => {
            try {
                const data = await fetchRegionData();
                setRegionData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getRegionData();
    }, []);

    return (
        <div className="row">

            {regionData.filter(obj => obj.regionId > 0).map((obj) => (
                <RegionCard
                    key={obj.regionId}
                    regionId={obj.regionId}
                    regionName={obj.regionName}
                    imageUrl={obj.imageUrl}
                    countryCount={obj.countryCount}
                />
            )
                
            )
            }
        </div>

    )

}

export default RegionCardList