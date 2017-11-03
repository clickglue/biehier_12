import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import { Text } from 'react-native';
import Signin from './containers/auth/Signin';
import Signup from './containers/auth/Signup';
import PostCreate from './containers/post/PostCreate';
import PostEdit from './containers/post/PostEdit';
import PostList from './containers/post/PostList';
import requireAuth from './containers/auth/requireAuth';
import requireNotAuth from './containers/auth/requireNotAuth';
import SelectDrinkers from './containers/drink/SelectDrinkers';
import Drink from './containers/drink/Drink';

const icon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black', }}>{title}</Text>
    )
}

const RouterComponent = () => (
    <Router
        sceneStyle={{ paddingTop: 65, backgroundColor: '#edecec' }}
        navigationBarStyle={styles.navigationBarStyle}
        titleStyle={{ color: '#4d4d4d' }}
    >
        <Scene key="root">
            <Scene key="tabBar" tabs={true} tabBarStyle={{ backgroundColor: 'white' }}>
                <Scene key="loginTab" title="Login" icon={icon}>
                    <Scene key="signup" component={requireNotAuth(Signup)} title="Please Sign up" />
                    <Scene key="signin" initial={true} component={requireNotAuth(Signin)} title="Please Sign in" />
                </Scene>
                <Scene key="postTab" title="Post" icon={icon}>
                    <Scene
                        key="postList"
                        component={requireAuth(PostList)}
                        title="Posts"
                        leftTitle="Sign out"
                        onLeft={() => { firebase.auth().signOut(); Actions.loginTab(); }}
                        onRight={() => Actions.postCreate()}
                        rightTitle="Add"
                    />
                    <Scene key="postCreate" component={requireAuth(PostCreate)} title="Create Post" />
                    <Scene key="postEdit" component={requireAuth(PostEdit)} title="Edit Post" />
                </Scene>
                <Scene key="selectDrinkers" title="Select" icon={icon}>
                    <Scene
                        key="SelectDrinkers"
                        component={requireAuth(SelectDrinkers)}
                        title="Select Drinkers"
                    />                
                </Scene>
                <Scene key="drinkTab" title="Drink" icon={icon}>
                    <Scene
                        key="Drink"
                        component={requireAuth(Drink)}
                        title="Drink"
                    />                
                </Scene>
            </Scene>
        </Scene>

    </Router>
);

const styles = {
    navigationBarStyle: {
        backgroundColor: '#fff',
        height:60,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
};

export default RouterComponent;