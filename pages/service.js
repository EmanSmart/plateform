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

export const getServerSideProps = async (context) => {
    const { serviceId } = context.query;
    console.log(serviceId);

    try {
        const service = await fetch(
            `${process.env.STRAPI_API_URL}/services/${serviceId}?populate=*`
        )
            .then(checkStatus)
            .then(parseJSON);
        console.log("service");
        console.log(service.data.attributes.service_flavors.data);
        return { props: { service } };
    } catch (error) {
        console.log("error");
        console.log(error);
        return { props: {} };
    }
};

export default function Service({ service }) {
    return (
        <>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Service Name: {service.data.attributes.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Service Price: {service.data.attributes.base_price}
                        </Card.Subtitle>
                        <Card.Text>
                            Service Desc: {service.data.attributes.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </div>
            <br />
            <div>
                {service.data.attributes.service_flavors.data.map((flavor) => (
                    <div key={flavor.id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    {flavor.attributes.name} - {flavor.id}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
}
