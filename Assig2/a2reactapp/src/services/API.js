const API_URL = 'http://localhost:5256/api';
export const fetchRegionData = async () => {
    try {
        const response = await fetch(API_URL + "/A_Regions");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch region data:', error);
        throw error;
    }
};

export const fetchGetAirQualityDataByCityId = async (cityId) =>
{
    try
    {
        const response = await fetch(`${API_URL}/C_Cities/GetAirQualityData/${cityId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) { throw error; }
}
export const fetchCountryListData = async (urlRegionId, query ='') =>
{
    try
    {
        const response = await fetch(`${API_URL}/B_Countries/CountryList/${urlRegionId}?searchText=${query}`);    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error)
    { throw error; }
}