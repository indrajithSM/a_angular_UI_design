ng new my-angular-project --version 17

npx -p @angular/cli@17 ng new a_angula







set NODE_OPTIONS=--openssl-legacy-provider  
for run the old version in latest version project 




nx 
nx dev build
nx build nx-drydock --configuration=development --source-map=true --base-href='/nx-angular/nx-drydock/'


nx g @nrwl/angular:component --nameAndDirectoryFormat=derived



* npx create-nx-workspace@16 workspace
			* cd workspace
			* npx nx g @nx/angular:host layout
			* npx nx g @nx/angular:remote drydock --host=layout
* create module-federation.manifest.json file in host's assets
			Paste :
					{
					"drydock": "http://localhost:4201",
					"pms": "http://localhost:4202",
					"sails": "http://localhost:4203",
					"procurement": "http://localhost:4204"
					}
*main.ts:
               import { setRemoteDefinitions } from '@nx/angular/mf';
						fetch('/assets/module-federation.manifest.json')
						.then((res) => res.json())
						.then((definitions) => setRemoteDefinitions(definitions))
						.then(() => import('./bootstrap').catch((err) => console.error(err)));
 
* App Routes: 
			Change: 			
						{
						path: 'drydock',
						loadChildren: () =>
							loadRemoteModule('drydock', './Module').then((m) => m.RemoteEntryModule),
						},
					
			* Serve	:  nx serve layout --devRemotes=drydock



<servlet-container name="default">
<jsp-config />
<websockets />
<!-- Wrap the mime-mapping inside mime-mappings -->
<mime-mappings>
<mime-mapping name="mjs" value="application/javascript"/>
</mime-mappings>
</servlet-container>



--skip-nx-cache









folder name change

Get-ChildItem * | Rename-Item -NewName { $_.Name + ".log" }
