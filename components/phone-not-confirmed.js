import Alert from "reactstrap";
import Link from 'next/link'

export default function Component() {
    return (
        <>
            <Alert key="warning" variant="warning">
                Your phone is not confriemd, <Link href="/phone-confirmation">click here</Link> to confrim you phone
            </Alert>
        </>
    );
}
