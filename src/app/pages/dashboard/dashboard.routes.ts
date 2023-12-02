import { Routes } from '@angular/router';
import { PrincipalComponent } from './view/principal/principal.component';
import { CardsComponent } from './view/cards/cards.component';
import { LoansComponent } from './view/loans/loans.component';
import { OperationsComponent } from './view/operations/operations.component';
import { BenefitsComponent } from './view/benefits/benefits.component';
import { InsuranceComponent } from './view/insurance/insurance.component';
import { PointsComponent } from './view/points/points.component';
import { HelpComponent } from './view/help/help.component';

export const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
    },
    {
        path: 'cards',
        component: CardsComponent,
    },
    {
        path: 'loans',
        component: LoansComponent,
    },
    {
        path: 'operations',
        component: OperationsComponent,
    },
    {
        path: 'benefits',
        component: BenefitsComponent,
    },
    {
        path: 'insurance',
        component: InsuranceComponent,
    },
    {
        path: 'points',
        component: PointsComponent,
    },
    {
        path: 'help',
        component: HelpComponent,
    },
]