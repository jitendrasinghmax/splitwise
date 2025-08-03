"use client"
import { BarLoader } from "react-spinners";
import { api } from "../../../../convex/_generated/api";
import { useConvexQuery } from "../../../../hooks/use-convex-query";
import Button from "../../../../component/ui/button/Button";
import Card from "../../../../component/ui/card/card";
import Image from "next/image";

export default function () {
    const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts);
    console.log({ data, isLoading })
    if (isLoading) {
        return <div className="contacts-loading">
            <BarLoader width="100%" height={5} loading={true} color="#36d7d7" />
        </div>
    }
    const { users, groups } = data || { users: [], groups: [] };
    return (<>
        <div className="contacts-container">
            <div className="contacts-top-container">
                <h1>Contacts</h1>
                <Button width="150px">
                    Add Contacts
                </Button>
            </div>
            <div className="contacts-bottom-container">
                {/*people*/}
                <div>
                    <h1>people</h1>
                    {users.length === 0 ?
                        (
                            <Card>
                                No contacts yet. Add an expense with someone to see them here.
                            </Card>
                        )
                        :
                        (
                            <div className="contacts-people-container">
                                {
                                    users.map((user) => (
                                        <Card className="contacts-people-card-container">
                                            <div style={{
                                                overflow: "hidden",
                                                borderRadius: "100%",
                                                height: "40px",
                                                width: "40px"
                                            }}><img style={{ width: "40px", height: "40px" }} src={user.imageUrl} alt="" /></div>
                                            <div>
                                                <h1>{user.name}</h1>
                                                <h1>{user.email}</h1>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </div>
                        )}
                </div>
                {/*groups*/}
                <div>
                    <h1>people</h1>
                    {groups.length === 0 ?
                        (
                            <Card>
                                No contacts yet. Add an expense with someone to see them here.
                            </Card>
                        ) : (
                            <div className="contacts-people-container">
                                {
                                    groups.map((group) => (
                                        <Card className="contacts-people-card-container">
                                            <div style={{
                                                overflow: "hidden",
                                                borderRadius: "100%",
                                                height: "40px",
                                                width: "40px"
                                            }}><img style={{ width: "40px", height: "40px" }} src={group.imageUrl} alt="" /></div>
                                            <div>
                                                <h1>{group.name}</h1>
                                                <h1>{group.memberCount+" members"}</h1>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>)
} 