/**
 * Copyright 2012-2014 Jorge Aliss (jaliss at gmail dot com) - twitter: @jaliss
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import play.GlobalSettings;
import securesocial.core.RuntimeEnvironment;
import service.MyEnvironment;

public class Global extends GlobalSettings {
    private RuntimeEnvironment env = new MyEnvironment();

   /* @Override
    public <A> A getControllerInstance(Class<A> controllerClass) throws Exception {
        A result;
        
        try {
            result = controllerClass.getDeclaredConstructor(RuntimeEnvironment.class).newInstance(env);
        } catch (NoSuchMethodException e) {
            // the controller does not receive a RuntimeEnvironment, delegate creation to base class.
            result = super.getControllerInstance(controllerClass);
        }
        return result;
    }*/
}
