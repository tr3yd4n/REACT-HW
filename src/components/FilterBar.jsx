import { Button, Col, Container, Row } from "react-bootstrap";


const filterBar = () => (
    <Container>
        <Row>
            <Col>
                <Button>
                    white
                </Button>
            </Col>
            <Col>
                <Button>
                    blue
                </Button>
            </Col>
            <Col>
                <Button>
                    <img src={"../public/swamp.png"} />
                </Button>
            </Col>
            <Col>
                <Button>
                    red
                </Button>
            </Col>
            <Col>
                <Button>
                    green
                </Button>
            </Col>
            <Col>
                <Button>
                    multi-color
                </Button>
            </Col>
            <Col>
                <Button>
                    colorless
                </Button>
            </Col>
            <Col>
                <Button>
                    land
                </Button>
            </Col>

        </Row>
    </Container>
)

export default filterBar