import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RedditAppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RedditAppModule);

