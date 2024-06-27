import { Component } from '@angular/core';

interface Setting {
  name: string;
  value: string | boolean; // Can be string or boolean based on setting type
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings: Setting[] = [
    { name: 'Enable Notifications', value: true },
    { name: 'Show Recent Activity', value: false },
    { name: 'Preferred Language', value: 'English' },
    { name: 'Theme', value: 'Light' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onToggleSetting(setting: Setting) {
    setting.value = (typeof setting.value === 'boolean') ? !setting.value : setting.value;
  }
}
