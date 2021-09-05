import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivitiyList from "./ActivityList";

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelActivity,
        editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivitiyList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <GridColumn width='6' >
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelActivity={cancelActivity}
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity}
                    createOrEdit={createOrEdit}
                />}
            </GridColumn>
        </Grid>
    )
}