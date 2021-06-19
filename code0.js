gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCarObjects1_1final = [];

gdjs.New_32sceneCode.GDCarObjects1= [];
gdjs.New_32sceneCode.GDCarObjects2= [];
gdjs.New_32sceneCode.GDCarObjects3= [];
gdjs.New_32sceneCode.GDBuildingObjects1= [];
gdjs.New_32sceneCode.GDBuildingObjects2= [];
gdjs.New_32sceneCode.GDBuildingObjects3= [];
gdjs.New_32sceneCode.GDRoadObjects1= [];
gdjs.New_32sceneCode.GDRoadObjects2= [];
gdjs.New_32sceneCode.GDRoadObjects3= [];
gdjs.New_32sceneCode.GDIntersectionObjects1= [];
gdjs.New_32sceneCode.GDIntersectionObjects2= [];
gdjs.New_32sceneCode.GDIntersectionObjects3= [];
gdjs.New_32sceneCode.GDIntersection2Objects1= [];
gdjs.New_32sceneCode.GDIntersection2Objects2= [];
gdjs.New_32sceneCode.GDIntersection2Objects3= [];
gdjs.New_32sceneCode.GDTurnObjects1= [];
gdjs.New_32sceneCode.GDTurnObjects2= [];
gdjs.New_32sceneCode.GDTurnObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "resources\\vroom.wav", 1, true, 50, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDCarObjects2 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate")) <= 95 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects2[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate")).add(10);
}
}}

}


};gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")) >= -(95) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).sub(10);
}
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects2[i].setDirectionOrAngle(gdjs.New_32sceneCode.GDCarObjects2[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].setDirectionOrAngle(gdjs.New_32sceneCode.GDCarObjects1[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects = Hashtable.newFrom({"Building": gdjs.New_32sceneCode.GDBuildingObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects = Hashtable.newFrom({"Building": gdjs.New_32sceneCode.GDBuildingObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects = Hashtable.newFrom({"Building": gdjs.New_32sceneCode.GDBuildingObjects1});gdjs.New_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 0.1 + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDCarObjects1[0].getVariables()).get("acceleration"))) / 200));
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{

gdjs.New_32sceneCode.GDCarObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDCarObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("acceleration")) > 20 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDCarObjects1_1final.indexOf(gdjs.New_32sceneCode.GDCarObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDCarObjects1_1final.push(gdjs.New_32sceneCode.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("acceleration")) < -(20) ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDCarObjects1_1final.indexOf(gdjs.New_32sceneCode.GDCarObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDCarObjects1_1final.push(gdjs.New_32sceneCode.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1_1final, gdjs.New_32sceneCode.GDCarObjects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) < 400 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).add(200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > -(75) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).sub(150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].addPolarForce((gdjs.New_32sceneCode.GDCarObjects1[i].getDirectionOrAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration"))), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).sub(50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Building"), gdjs.New_32sceneCode.GDBuildingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBuildingObjects1 */
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Building"), gdjs.New_32sceneCode.GDBuildingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBuildingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > 100 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).setNumber(100);
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getPointX("")) + 267 * Math.cos((( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getDirectionOrAngle()) * 3.1415 / 180) + 50, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getPointY("")) + 150 * Math.sin(3.1415 * (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getDirectionOrAngle()) / 180) + 25, "", 0);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCarObjects1.length = 0;
gdjs.New_32sceneCode.GDCarObjects2.length = 0;
gdjs.New_32sceneCode.GDCarObjects3.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects1.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects2.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects3.length = 0;
gdjs.New_32sceneCode.GDRoadObjects1.length = 0;
gdjs.New_32sceneCode.GDRoadObjects2.length = 0;
gdjs.New_32sceneCode.GDRoadObjects3.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects1.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects2.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects3.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects1.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects2.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects3.length = 0;
gdjs.New_32sceneCode.GDTurnObjects1.length = 0;
gdjs.New_32sceneCode.GDTurnObjects2.length = 0;
gdjs.New_32sceneCode.GDTurnObjects3.length = 0;

gdjs.New_32sceneCode.eventsList4(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
