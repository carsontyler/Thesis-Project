import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-native";

interface InformedConsentCompProps {
    directionsCheckboxChange: any;
    handleSubmit: any;
    directionsAccepted: boolean;
    refresh: any;
}

export const InformedConsentComp: React.FC<InformedConsentCompProps> = (
    props
) => {
    useEffect(() => {
        props.refresh();
    }, [props.directionsAccepted]);

    return (
        <Card style={{ background: "rgba(45, 51, 60, 1)" }}>
            <CardHeader style={{ textAlign: "center" }}>
                <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />
                    WEBER STATE UNIVERSITY <br />
                    INFORMED CONSENT <br />
                    “Bubble-Up Problem” in a Recommendation Engine <br />
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div
                    style={{
                        overflow: "auto",
                        maxHeight: "65vh",
                        padding: "15px",
                        background: "rgba(55, 61, 70, 1)",
                    }}
                >
                    You are invited to participate in a research study of the
                    effectiveness of different result layouts and recommending
                    uncertain recommendations. You were selected as a possible
                    subject because you volunteered to participate. We ask that
                    you read this form and ask any questions you may have before
                    agreeing to be in the study.
                    <br />
                    The study is being conducted by Carson Tyler in connection
                    with the computer Science Department at Weber State
                    University.
                    <br />
                    <h3>STUDY PURPOSE</h3>
                    The purpose of this study is to understand the “bubble-up
                    problem.” This is best described in an example. If you visit
                    a recipe website, you will likely be presented with popular,
                    highly rated recipes on the home page. When you search for a
                    recipe, you are also likely to interact only with popular,
                    highly rated recipes. This can be an issue if one were to
                    submit a new recipe to the site and it never received
                    exposure because the recommendation system of the site is
                    not set up to recommend newer, unpopular recipes. Therefore,
                    this study serves as a demonstration of effective ways to
                    combat the “bubble-up problem.”
                    <br />
                    <h3>NUMBER OF PEOPLE TAKING PART IN THE STUDY:</h3>
                    If you agree to participate, you will be one of at least 50
                    subjects who will be participating in this research.
                    <br />
                    <h3>PROCEDURES FOR THE STUDY:</h3>
                    If you agree to be in the study, you will do the following
                    things:
                    <br />
                    1. Selecting recipes which best relate to a given scenario.
                    <br />
                    2. Receive recommendations based on that selection.
                    <br />
                    3. Rating the recommendations in a survey.
                    <br />
                    <h3>RISKS OF TAKING PART IN THE STUDY: </h3>
                    There are no risks to you in participating in this study
                    other than those that are common to general computer use.
                    Some of these risks are listed below.
                    <br />
                    1. Eye Strain
                    <br />
                    2. Headaches
                    <br />
                    3. Musculoskeletal strain.
                    <br />
                    <h3>BENEFITS OF TAKING PART IN THE STUDY</h3>
                    You will receive payment for taking part in this study. Upon
                    completion of the study you will need to digitally sign a
                    document indicating that you will receive payment. To
                    receive payment, you must provide the research team with a
                    valid mailing address. You will then receive a $10.00 Amazon
                    gift card.
                    <br />
                    <h3>ALTERNATIVES TO TAKING PART IN THE STUDY:</h3>
                    Instead of being in the study, you have these options: you
                    may choose not to participate.
                    <br />
                    <h3>COSTS/COMPENSATION FOR INJURY</h3>
                    In the event of physical injury resulting from your
                    participation in this research, necessary medical treatment
                    will be provided to you and billed as part of your medical
                    expenses. Costs not covered by your health care insurer will
                    be your responsibility. Also, it is your responsibility to
                    determine the extent of your health care coverage. There is
                    no program in place for other monetary compensation for such
                    injuries. However, you are not giving up any legal rights or
                    benefits to which you are otherwise entitled. If you are
                    participating in research which is not conducted at a
                    medical facility, you will be responsible for seeking
                    medical care and for the expenses associated with any care
                    received.
                    <br />
                    <h3>CONFIDENTIALITY</h3>
                    Efforts will be made to keep your personal information
                    confidential. We cannot guarantee absolute confidentiality.
                    Your personal information may be disclosed if required by
                    law. Your identity will be held in confidence in reports in
                    which the study may be published and databases in which
                    results may be stored.
                    <br />
                    Organizations that may inspect and/or copy your research
                    records for quality assurance and data analysis include
                    groups such as the study investigator and his/her research
                    associates, the Weber State University Institutional Review
                    Board or its designees, and (as allowed by law) state or
                    federal agencies, specifically the Office for Human Research
                    Protections (OHRP) and the Food and Drug Administration
                    (FDA) [for FDA-regulated research and research involving
                    positron- emission scanning], the National Cancer Institute
                    (NCI) [for research funded or supported by NCI], the
                    National Institutes of Health (NIH) [for research funded or
                    supported by NIH], etc., who may need to access your medical
                    and/or research records.
                    <br />
                    <h3>CONTACTS FOR QUESTIONS OR PROBLEMS</h3>
                    For questions about the study, contact the researcher Carson
                    Tyler at 385.244.6611 or the researcher’s mentor Robert Ball
                    at 801.626.7942.
                    <br />
                    For questions about your rights as a research participant or
                    to discuss problems, complaints or concerns about a research
                    study, or to obtain information, or offer input, contact the
                    Chair of the IRB Committee IRB@weber.edu.
                    <br />
                    <h3>VOLUNTARY NATURE OF STUDY</h3>
                    Taking part in this study is voluntary. You may choose not
                    to take part or may leave the study at any time. Leaving the
                    study will not result in any penalty or loss of benefits to
                    which you are entitled. Your decision whether or not to
                    participate in this study will not affect your current or
                    future relations with Weber State University.
                </div>

                <form>
                    <label>
                        <input
                            name="directionsCheckbox"
                            type="checkbox"
                            onChange={props.directionsCheckboxChange}
                            style={{ marginTop: "15px" }}
                        />
                        I agree to the Informed Consent.
                        <br />
                    </label>
                    <br/>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Button
                                onPress={props.handleSubmit}
                                title="Submit"
                                color="#4ECCA3"
                                disabled={!props.directionsAccepted}
                            />
                        </Grid>
                    </Grid>
                </form>
            </CardBody>
        </Card>
    );
};
