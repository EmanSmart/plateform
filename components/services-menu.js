import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useState, useEffect } from "react";

export default function Component() {
    const services = [];
    fetch("/api/get-services").then((res) => {
        if (res.status === 200) {
            res.json().then((data) => {
                for (const service of data) {
                    services.push(
                        <DropdownItem key={service.id} href={"/service/" + service.id}>
                            {service.attributes.name}
                        </DropdownItem>
                    );
                }
            });
        } else {
        }
    });

    return (
        <>
            <div>
                <Dropdown>
                    <DropdownToggle variant="success" id="dropdown-basic">
                        Service List
                    </DropdownToggle>

                    <DropdownMenu>{services}</DropdownMenu>
                </Dropdown>
            </div>
        </>
    );
}
