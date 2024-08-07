import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationBackEvent, FlowNavigationNextEvent} from 'lightning/flowSupport';

/*FlowAttributeChangeEvent — Informs the runtime that a component property has changed.
FlowNavigationBackEvent — Requests navigation to the previous screen.
FlowNavigationNextEvent — Requests navigation to the next screen.
*/
export default class EcmsCutomButtonsForNewChecklistFlow extends LightningElement {
    @api btnName;
    @api templateId = '';

    get isPreviousButtonDisabled() {
        return this.templateId.trim() !== '';
    }

    connectedCallback(){
        console.log('templateId: ',  this.templateId);
        console.log('isPreviousButtonDisabled' , this.isPreviousButtonDisabled);
    }

    handleSaveData(event){

        if(event.target.name === 'Save as Draft'){
            this.btnName = event.target.name;
            console.log('btn name: ',this.btnName);
            const attributeChangeEvent = new FlowAttributeChangeEvent('btnName', this.btnName);
            this.dispatchEvent(attributeChangeEvent);
        }
        else if(event.target.name === 'Send Checklists'){
            this.btnName = event.target.name;
            console.log('btn name: ',this.btnName);
            const attributeChangeEvent = new FlowAttributeChangeEvent('btnName', this.btnName);
            this.dispatchEvent(attributeChangeEvent);
        }
        const navigateNextEvent = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNextEvent);
    }

    handleGoBack(){
        // navigate to the back screen
        const navigateBackEvent = new FlowNavigationBackEvent();
        this.dispatchEvent(navigateBackEvent);
    }
}