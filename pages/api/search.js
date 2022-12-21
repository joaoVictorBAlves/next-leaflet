// https://nominatim.openstreetmap.org/search?state={state}&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?country={country}&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?city={city}&polygon_geojson=1
// https://nominatim.openstreetmap.org/search?city=uruburetama&street=travessa_major_sales&polygon_geojson=1

export default async function search(req, res) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        const country = body.country
        const state = body.state
        const city = body.city
        const street = body.street
        console.log(body)

        let url = null

        if (street != undefined && city != undefined) {
            url = `https://nominatim.openstreetmap.org/search?city=${city}&street=${street}&polygon_geojson=1&format=json&addressdetails=1`
        } else if (city != undefined) {
            url = `https://nominatim.openstreetmap.org/search?city=${city}&polygon_geojson=1&format=json&addressdetails=1`
            if (state != undefined) {
                url = `https://nominatim.openstreetmap.org/search?city=${city}&state=${state}&polygon_geojson=1&format=json&addressdetails=1`
            }

        } else if (state != undefined) {
            url = `https://nominatim.openstreetmap.org/search?state=${state}&polygon_geojson=1&format=json&addressdetails=1`
            if (country != undefined) {
                url = `https://nominatim.openstreetmap.org/search?state=${state}&country=${country}&polygon_geojson=1&format=json&addressdetails=1`
            }
            url = `https://nominatim.openstreetmap.org/search?state=${state}&polygon_geojson=1&format=json&addressdetails=1`
        } else if (country != undefined) {
            url = `https://nominatim.openstreetmap.org/search?country=${country}&polygon_geojson=1&format=json&addressdetails=1`
        } else {
            res.status(400).json({ error: "nenhum parâmetro passado" })
        }

        if (url != null) {
            const data = await fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    return data;
                })

            res.status(200).json(data)
        }
    }
}