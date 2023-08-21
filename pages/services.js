import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const parseJSON = (resp) => (resp.json ? resp.json() : resp);
const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then((respJSON) => {
        throw respJSON;
    });
};

export const getServerSideProps = async () => {
    try {
        const services = await fetch(`${process.env.STRAPI_API_URL}/services`)
            .then(checkStatus)
            .then(parseJSON);
        return { props: { services } };
    } catch (error) {
        return { props: {} };
    }
};

export default function servicesList({ services }) {
    console.log(services);
    return (
        <>
            {services.data.map((service) => (
                <div key={service.id}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>{service.attributes.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Price: {service.attributes.base_price}
                            </Card.Subtitle>
                            <Card.Text>
                                {service.attributes.description}
                            </Card.Text>
                            <a href={`/service/?serviceId=${service.id}`}>
                                <Button variant="primary">
                                    Get This Service{" "}
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            ))}
        </>
    );
}
