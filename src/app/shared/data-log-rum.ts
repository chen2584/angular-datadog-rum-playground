import { datadogRum } from '@datadog/browser-rum';
import { environment } from '../../environments/environment';

export default class DataDogRUMHelper {
    public static initlalRUM() {
        datadogRum.init({
            applicationId: environment.dataDogRum.applicationId,
            clientToken: environment.dataDogRum.clientToken,
            // `site` refers to the Datadog site parameter of your organization
            // see https://docs.datadoghq.com/getting_started/site/
            site: 'us5.datadoghq.com',
            service: 'hello-rum',
            env: 'dev',
            // Specify a version number to identify the deployed version of your application in Datadog
            // version: '1.0.0', 
            sessionSampleRate: 100,
            sessionReplaySampleRate: 20,
            trackUserInteractions: true,
            trackResources: true,
            trackLongTasks: true,
            defaultPrivacyLevel: 'mask-user-input',
        });
    }
}