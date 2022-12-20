// https://nominatim.openstreetmap.org/search?state={state}&format=geojson&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?country={country}&format=geojson&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?city={city}&format=geojson&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?city=uruburetama&street=travessa_major_sales&format=geojson&polygon_geojson=1

export default async function search(req, res) {
    if (req.method === 'POST') {
        const country = req.body.country
        const state = req.body.state
        const city = req.body.city
        const street = req.body.street

        let url = null

        if (street && city) {
            url = `https://nominatim.openstreetmap.org/search?city=${city}&street=${street}&format=geojson&polygon_geojson=1`
        } else if (city) {
            url = `https://nominatim.openstreetmap.org/search?city=${city}&format=geojson&polygon_geojson=1`
        } else if (state) {
            url = `https://nominatim.openstreetmap.org/search?state=${state}&format=geojson&polygon_geojson=1`
        } else if (country) {
            url = `https://nominatim.openstreetmap.org/search?country=${country}&format=geojson&polygon_geojson=1`
        } else {
            res.status(400).json({ error: "erro" })
        }

        const data = await fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            });

        res.status(200).json(data)
    }
}