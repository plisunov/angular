import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {select, Store} from '@ngrx/store';
import {LogOut} from '../../store/actions/user.actions';
import {selectUser} from '../../store/selectors/user.selectors';
import {IUserState} from '../../store/states/user.state';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated: boolean;
  public lastName: string;
  public firstName: string;
  public selectedLanguage: string;
  public languages: {id: string, title: string}[] = [];

  public loggedUser$ = this.store.pipe(select(selectUser)).subscribe((user: IUserState) => {
    this.lastName = user.user.lastName;
    this.firstName = user.user.firstName;
  });

  constructor(private authService: AuthService,
              private store: Store,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
    this.selectedLanguage = environment.defaultLocale;
    this.translateService.get(environment.locales.map(x => `LANGUAGES.${x.toUpperCase()}`))
      .subscribe(translations => {
        // init dropdown list with TRANSLATED list of languages from config
        this.languages = environment.locales.map(x => {
          return {
            id: x,
            title: translations[`LANGUAGES.${x.toUpperCase()}`],
          };
        });
      });

    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onClick(): void {
    this.store.dispatch(new LogOut());
  }

  changeLocale(): void {
    this.translateService.use(this.selectedLanguage);
  }

}
