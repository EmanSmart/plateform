export default async function getServices(req, res) {
    const apiRes = await fetch(
        "https://69-164-205-56.ip.linodeusercontent.com/api/services"
    );
    if (apiRes.ok) {
        const data = await apiRes.json();
        res.status(200).json(data.data);
    }
    else {
        res.status(401).json({});
    }
    
}
